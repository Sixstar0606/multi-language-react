import React from "react";

import { withTranslation } from "react-i18next";


const Advantages = ({ t }) => {

  return (

    <div>

      {t("thankyou.label")}

      {t("Advantages.label")}

      {t("Advantagesdetails.label")}

    </div>

  );

};


export default withTranslation()(Advantages);