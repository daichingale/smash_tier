import { fileURLToPath } from 'url';
import { resolve, dirname } from 'pathe';

const distDir = resolve(typeof __dirname === "undefined" ? dirname(fileURLToPath(import.meta.url)) : __dirname);
const _makeResolve = (base) => {
  return (...p) => resolve(base, ...p);
};
const runtimeDir = resolve(distDir, "runtime");
const resolveRuntimeDir = _makeResolve(runtimeDir);
const templateDir = resolve(distDir, "templates");
const resolveTemplateDir = _makeResolve(templateDir);

const Defaults = {
  tag: "adsbygoogle",
  id: null,
  pageLevelAds: false,
  includeQuery: false,
  analyticsUacct: "",
  analyticsDomainName: "",
  overlayBottom: false,
  test: false,
  onPageLoad: false,
  pauseOnLoad: false
};
const TestID = "ca-google";
const AdSenseURL = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
function nuxtAdSense(moduleOptions = {}) {
  const nuxt = this.nuxt;
  const isNuxt2 = (nuxt?._version || nuxt?.version || nuxt?.constructor?.version || "").replace(/^v/g, "").startsWith("2.");
  const useNuxtMeta = (fn) => fn(isNuxt2 ? nuxt.options.head : nuxt.options.meta);
  const options = Object.assign({}, Defaults, nuxt.options["google-adsense"] || moduleOptions);
  options.test = Boolean(options.test);
  options.pageLevelAds = Boolean(options.pageLevelAds);
  options.includeQuery = Boolean(options.includeQuery);
  options.analyticsUacct = options.analyticsUacct || "";
  options.analyticsDomainName = options.analyticsDomainName || "";
  options.overlayBottom = Boolean(options.overlayBottom);
  options.onPageLoad = Boolean(options.onPageLoad);
  options.pauseOnLoad = Boolean(options.pauseOnLoad);
  if (nuxt.options.dev && process.env.NODE_ENV !== "production") {
    options.test = true;
  }
  if (options.test) {
    options.id = TestID;
  }
  if (!options.id || typeof options.id !== "string") {
    return;
  }
  options.tag = options.tag || Defaults.tag;
  useNuxtMeta((head) => {
    head.script.push({
      hid: "adsbygoogle-script",
      defer: true,
      crossorigin: "anonymous",
      src: `${AdSenseURL}?client=${options.id}`
    });
    head.__dangerouslyDisableSanitizersByTagID = head.__dangerouslyDisableSanitizersByTagID || {};
    head.__dangerouslyDisableSanitizersByTagID.adsbygoogle = ["innerHTML"];
    const adsenseScript = `{
      google_ad_client: "${options.id}",
      overlays: {bottom: ${options.overlayBottom}},
      ${options.pageLevelAds ? "enable_page_level_ads: true" : ""}
    }`;
    if (!options.onPageLoad) {
      head.script.push(createScriptMeta(`adsbygoogle.pauseAdRequests=${options.pauseOnLoad ? "1" : "0"};
          adsbygoogle.push(${adsenseScript});`));
    } else {
      head.script.push(createScriptMeta(`adsbygoogle.onload = function () {
            adsbygoogle.pauseAdRequests=${options.pauseOnLoad ? "1" : "0"};
            [].forEach.call(document.getElementsByClassName('adsbygoogle'), function () { adsbygoogle.push(${adsenseScript}); })
          };`));
    }
    if (options.test) {
      head.meta.unshift({
        name: "robots",
        content: "noindex,noarchive,nofollow"
      });
    }
  });
  if (isNuxt2) {
    this.addPlugin({
      src: resolveTemplateDir("./plugin.mjs"),
      fileName: "adsbygoogle.js",
      options: {
        component: resolveRuntimeDir("./components/Adsbygoogle.vue"),
        alias: options.tag
      }
    });
  } else {
    nuxt.hook("components:dirs", (dirs) => {
      dirs.push({
        path: resolveRuntimeDir("components-v3"),
        isAsync: false,
        prefix: "",
        level: 999
      });
    });
  }
  nuxt.options.publicRuntimeConfig["google-adsense"] = {
    ...options,
    ...nuxt.options.publicRuntimeConfig["google-adsense"] || {}
  };
  function createScriptMeta(script) {
    script = `(window.adsbygoogle = window.adsbygoogle || []); ${script}`;
    script = `if (!window.__abg_called){ ${script} window.__abg_called = true;}`;
    return isNuxt2 ? {
      hid: "adsbygoogle",
      innerHTML: script
    } : {
      hid: "adsbygoogle",
      children: script
    };
  }
}

export { nuxtAdSense as default };
