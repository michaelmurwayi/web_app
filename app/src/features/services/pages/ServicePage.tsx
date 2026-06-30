import AboutHero from "@/components/organisms/AboutHero";
import { serviceHeroConfig } from "@/config/services/ServiceHero.config";

const ServicePage = () => {
  return (
    <>
      <AboutHero config={serviceHeroConfig} />
    </>
  );
};

export default ServicePage;
