export const colorPrimary = "#495cea";
export const colorBg = "#ffffff"
export const GLOBAL_STYLE = {
  token: {
    colorPrimary: colorPrimary,
    colorBgLayout: colorBg,
    borderRadius: 4,
    fontSize: 16,
    fontFamily:
      "Fira Sans, Maven Pro, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
  },
  components: {
    // Divider: {
    //   verticalMarginInline: 0,
    // },
    Layout: {
      headerBg: colorBg,
      headerPadding: 0,
      footerPadding: "50px 0px 50px 0px",
    },
    Menu: {
      itemBorderRadius: 12,
      subMenuItemBorderRadius: 6,
      horizontalItemBorderRadius: 8,
    },
    Tag: {
      styles: {
        root: {
          marginInlineEnd: 8,
        },
      },
    },
  },
};
