import Welcome from '@components/landing/welcome';
import Outlook from '@components/landing/outlook/outlook';
import Bunga from '@components/landing/bunga/bunga';

const Landing = () => {
  return (
    <div className="container mx-auto p-4">
      <Welcome name={'Testing'} />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4"> {/* Set 12 columns for larger screens */}
        <div className="md:col-span-8 flex"> {/* Outlook takes up 8 columns */}
          <Outlook className="flex-1" />
        </div>
        <div className="md:col-span-4 flex flex-col gap-4"> {/* Bunga takes up 4 columns */}
          <div className="flex-1">
            <Bunga title="Small Card 1" content="Content for small card 1..." />
          </div>
          <div className="flex-1">
            <Bunga title="Small Card 2" content="Content for small card 2..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
