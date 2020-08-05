const HeadwayConfig = {
  selector: "#footer",
  account: "JlR9Gx",
};

exports.onInitialClientRender = () => {
  window.Headway.init(HeadwayConfig);
};

exports.onRouteUpdate = () => {
  window.Headway.init(HeadwayConfig);
};
