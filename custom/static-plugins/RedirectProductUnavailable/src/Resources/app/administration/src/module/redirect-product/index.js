import deDE from './snippet/de-DE.json';
import enGB from './snippet/en-GB.json';

import './extension/sw-users-permissions-user-detail';
import './extension/sw-product-detail-seo';

Shopware.Module.register('redirectProduct', {
    type: 'plugin',
    name: 'redirectProduct',
    title: 'redirect-product.general.title',
    description: 'redirect-product.general.title',

    snippets: {
        'de-DE': deDE,
        'en-GB': enGB
    },
});
