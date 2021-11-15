export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-1-studio-svd86xcw',
                  apiId: 'a102e21d-c5c7-4916-b81d-51be0ceff2a4'
                },
                {
                  buildHookId: '6192cdcb3c179400c84e915f',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-1-web-7fvjb8eb',
                  apiId: '9987ea72-4d46-423c-8028-bf8342d4ab79'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kapehe-ok/sanity-nuxt-events-1',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-1-web-7fvjb8eb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
