import AboutHero from "@/components/organisms/AboutHero";
import { serviceHeroConfig } from "@/config/services/ServiceHero.config";
import {
  ServiceExcellence,
  serviceExcellenceConfig,
} from "@/components/organisms/ServiceExcellence";
import { OurServices } from "@/components/organisms/OurServices";
import { ourServicesConfig } from "@/config/services/OurServices.config";
import {
  CoreServices,
  coreServicesConfig,
} from "@/components/organisms/CoreService";
import {
  TradingProcess,
  tradingProcessConfig,
} from "@/components/organisms/TradingProcess";
import {
  CompanySlogan,
  companySloganConfig,
} from "@/components/organisms/CompanySlogan";

import { Contact, contactConfig } from "@/components/organisms/Contact";
import { Footer, footerConfig } from "@/components/organisms/Footer";

const ServicePage = () => {
  return (
    <>
      <AboutHero config={serviceHeroConfig} />
      <ServiceExcellence config={serviceExcellenceConfig} />
      <OurServices config={ourServicesConfig} />
      <CoreServices config={coreServicesConfig} />
      <TradingProcess config={tradingProcessConfig} />
      <CompanySlogan config={companySloganConfig} />
      <Contact config={contactConfig} />
      <Footer config={footerConfig} />
    </>
  );
};

export default ServicePage;
