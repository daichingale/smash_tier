declare namespace _default {
    namespace props {
        namespace adClient {
            export const type: StringConstructor;
            const _default: any;
            export { _default as default };
        }
        namespace adSlot {
            const type_1: StringConstructor;
            export { type_1 as type };
            const _default_1: any;
            export { _default_1 as default };
        }
        namespace adFormat {
            const type_2: StringConstructor;
            export { type_2 as type };
            const _default_2: string;
            export { _default_2 as default };
        }
        namespace adLayout {
            const type_3: StringConstructor;
            export { type_3 as type };
            const _default_3: any;
            export { _default_3 as default };
        }
        namespace adLayoutKey {
            const type_4: StringConstructor;
            export { type_4 as type };
            const _default_4: any;
            export { _default_4 as default };
        }
        namespace adStyle {
            const type_5: ObjectConstructor;
            export { type_5 as type };
            function _default(): {
                display: string;
            };
            function _default(): {
                display: string;
            };
            export { _default as default };
        }
        namespace adFullWidthResponsive {
            const type_6: BooleanConstructor;
            export { type_6 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        namespace pageUrl {
            const type_7: StringConstructor;
            export { type_7 as type };
            const _default_6: any;
            export { _default_6 as default };
        }
        namespace analyticsUacct {
            const type_8: StringConstructor;
            export { type_8 as type };
            const _default_7: any;
            export { _default_7 as default };
        }
        namespace analyticsDomainName {
            const type_9: StringConstructor;
            export { type_9 as type };
            const _default_8: any;
            export { _default_8 as default };
        }
        namespace includeQuery {
            const type_10: BooleanConstructor;
            export { type_10 as type };
            const _default_9: any;
            export { _default_9 as default };
        }
    }
    function data(): {
        show: boolean;
        renderQueue: any[];
        key: number;
    };
    function data(): {
        show: boolean;
        renderQueue: any[];
        key: number;
    };
    namespace computed {
        function options(): any;
        function options(): any;
        function _includeQuery(): any;
        function _includeQuery(): any;
    }
    namespace watch {
        function $route(to: any, from: any): void;
        function $route(to: any, from: any): void;
    }
    function mounted(): void;
    function mounted(): void;
    namespace methods {
        function adRegion(): string;
        function adRegion(): string;
        function updateAd(): void;
        function updateAd(): void;
        function showAd(): void;
        function showAd(): void;
    }
    function render(): any;
    function render(): any;
}
export default _default;
