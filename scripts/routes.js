(function() {
    const basePath = window.location.hostname === 'github.com' ? '/SiteAngra3dStudioV2.0' : '.';
    document.querySelectorAll('link[rel="stylesheet"], link[rel="icon"], img, a').forEach(element => {
        const attribute = element.tagName === 'LINK' ? 'href' : 'src';
        if (element.getAttribute(attribute).startsWith('./assets') || element.getAttribute(attribute).startsWith('/SiteAngra3dStudioV2.0/assets')) {
            element.setAttribute(attribute, element.getAttribute(attribute).replace(/^(\.\/|\/SiteAngra3dStudioV2.0\/)/, basePath + '/'));
        }
    });
})();
