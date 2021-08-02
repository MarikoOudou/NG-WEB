export let MENU_ITEM = [
    {
        path: 'index',
        title: 'Dashboard',
        icon: 'dashboard'
    },

/*
    {
      path: 'profile',
      title: 'Profil',
      icon: 'user'
    },*/

    {
      path: 'ventes',
      title: 'Ventes',
      icon: 'cart-plus'
    },



  {
    path: 'blogs',
    title: 'Blog',
    icon: 'book',
    children: [
        {
            path: 'category',
            title: 'Catégories'
        },
        {
            path: 'article',
            title: 'Articles'
        },
    ]
  },

{
  path: 'mes-pages',
  title: 'Mes pages',
  icon: 'window-maximize',
  children: [
      {
          path: 'accueil',
          title: 'Accueil'
      },/*
      {
        path: 'equipe',
        title: 'Equipe'
    },*/
  ]
},

{
  path: 'produits',
  title: 'Produits',
  icon: 'archive',
  /*children: [
      {
          path: 'maisons',
          title: 'Maisons'
      },
      {
          path: 'terrains',
          title: 'Terrains'
      },
  ]*/
},

{
  path: 'utilisateurs',
  title: 'Utilisateurs',
  icon: 'users'
},



/*

{
  path: '',
  title: '---------------------------------------------------------------------',
  icon: ''
},
    {
        path: 'editor',
        title: 'Pell Editor',
        icon: 'pencil'
    },
    {
        path: 'icon',
        title: 'Icon',
        icon: 'diamond'
    },
    {
        path: 'profile',
        title: 'User Profile',
        icon: 'user'
    },
    {
        path: 'ui',
        title: 'UI Element',
        icon: 'paint-brush',
        children: [
            {
                path: 'grid',
                title: 'Bootstrap Grid'
            },
            {
                path: 'buttons',
                title: 'Buttons'
            },
            {
                path: 'notification',
                title: 'Notification'
            },
            {
                path: 'tabs',
                title: 'Tabs'
            },
            {
                path: 'file-tree',
                title: 'File Tree'
            },
            {
                path: 'modals',
                title: 'Modals'
            },
            {
                path: 'progress-bar',
                title: 'ProgressBar'
            },

        ]
    },
    {
        path: 'form',
        title: 'Forms',
        icon: 'check-square-o',
        children: [
            {
                path: 'form-inputs',
                title: 'Form Inputs'
            },
            {
                path: 'form-layouts',
                title: 'Form Layouts'
            },
            {
                path: 'file-upload',
                title: 'File Upload'
            },
            {
                path: 'ng2-select',
                title: 'Ng2-Select'
            }
        ]
    },
    {
        path: 'charts',
        title: 'Charts',
        icon: 'bar-chart',
        children: [
            {
                path: 'echarts',
                title: 'Echarts'
            }
        ]
    },
    {
        path: 'table',
        title: 'Tables',
        icon: 'table',
        children: [
            {
                path: 'basic-tables',
                title: 'Basic Tables'
            },
            {
                path: 'data-table',
                title: 'Data Table'
            }
        ]
    },
    {
        path: 'menu-levels',
        title: 'Menu Levels',
        icon: 'sitemap',
        children: [
            {
                path: 'levels1',
                title: 'Menu Level1',
                children: [
                    {
                        path: 'levels1-1',
                        title: 'Menu Level1-1'
                    }
                ]
            },
            {
                path: 'levels2',
                title: 'Menu Level2'
            }
        ]
    },*/
];
