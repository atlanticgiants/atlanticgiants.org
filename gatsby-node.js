exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const results = await graphql(`
    {
      dataJson {
        navBar {
          id
          title
          href
          dropDown {
            id
            href
          }
        }
      }
    }
  `)
  const navBarItems = results.data.dataJson.navBar

  const i18nLocales = ['pt', 'en'] // retrieve this from /data/i18n

  const createMultipleLocalPages = (locales, path, id) => {
    locales.forEach(locale => {
      createPage({
        //path: `${locale}/${path}`,
        path: `/${path}`,
        component: require.resolve('./src/templates/detailPage.js'),
        context: {
          id
        }
      })
    })
  }

  navBarItems.map(navBarItem => {
    createMultipleLocalPages(i18nLocales, navBarItem.href, navBarItem.id)

    navBarItem.dropDown && navBarItem.dropDown.map(dropDownItem => {
      if (dropDownItem.href) {
        createMultipleLocalPages(i18nLocales, dropDownItem.href, dropDownItem.id)
      }
    })
  })
}
