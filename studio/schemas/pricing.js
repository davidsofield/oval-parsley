export default {
    "type": "document",
    "name": "pricing",
    "title": "Pricing",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of the page.",
            "validation": Rule => Rule.required()
        },
        {
            "type": "array",
            "name": "sections",
            "title": "Sections",
            "description": "Pricing page sections.",
            "validation": null,
            "of": [
                {
                    "type": "contentblock"
                },
                {
                    "type": "ctablock"
                },
                {
                    "type": "faqblock"
                },
                {
                    "type": "pricingblock"
                }
            ]
        },
        {
            "type": "page_menus",
            "name": "menus",
            "title": "Pricing Menus",
            "description": "Which menus should this page show up in",
            "validation": null
        },
        {
            "type": "string",
            "name": "template",
            "title": "Template",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "pricing"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_url_path",
            "title": "Pricing URL Path",
            "description": "The URL path of this page relative to site root. For example, the site root page would be \"/\", and post page would be \"posts/new-post/\"",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "page"
                ]
            }
        }
    ],
    "singleInstance": true,
    "preview": {
        "select": {
            "title": "title"
        }
    }
}