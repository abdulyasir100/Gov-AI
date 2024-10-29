import Welcome from "@components/landing/welcome";
import Outlook from "@components/landing/outlook/outlook";
import Bunga from "@components/landing/bunga/bunga";
import Valuta from "@components/landing/valuta/valuta";
import IndexPasar from "@components/landing/valuta/index-pasar";
import Komoditas from "@components/landing/valuta/komoditas";

const Landing = () => {
  return (
    <div className="container mx-auto p-4">
      <Welcome name="Testing" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-8">
          <Outlook />
        </div>
        <div className="md:col-span-4">
          <Bunga />
        </div>
        <div className="md:col-span-12">
          <Valuta />
        </div>
        <div className="md:col-span-12">
          <IndexPasar />
        </div>
        <div className="md:col-span-12">
          <Komoditas />
        </div>
      </div>
    </div>
  );
};

export default Landing;