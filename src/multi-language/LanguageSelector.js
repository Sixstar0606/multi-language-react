import React from "react";
import i18n from 'i18next';

import { useTranslation } from "react-i18next";


const LanguageSelector = () => {

  const { t, i18n } = useTranslation();


  const changeLanguage = (event) => {

    i18n.changeLanguage(event.target.value);

  };


  return (

    <div onChange={changeLanguage}>

      <input type="radio" value="en" name="language" defaultChecked /> {t("Language.En")}
      <input type="radio" value="de" name="language" />
      {t("Language.SP")}

    </div>

  );

};


export default LanguageSelector;