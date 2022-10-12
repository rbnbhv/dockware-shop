import deDE from './snippet/de-DE.json';
import enGB from './snippet/en-GB.json';

import './extension/sw-product-detail-seo';
import './component/redirect-product-category';

Shopware.Module.register('redirect-product', {
    type: 'plugin',
    name: 'redirectProduct',
    title: 'redirect-product.general.title',
    description: 'redirect-product.general.title',

    snippets: {
        'de-DE': deDE,
        'en-GB': enGB
    },
});
