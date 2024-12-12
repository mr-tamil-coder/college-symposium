import React from "react";

// Reusable SVG Icon Component
const PhoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    className="flex-shrink-0"
  >
    <path
      strokeWidth="2"
      strokeLinecap="round"
      stroke="#fff"
      fillRule="evenodd"
      d="m24.8868 19.1288c-1.0274-.1308-2.036-.3815-3.0052-.7467-.7878-.29-1.6724-.1034-2.276.48-.797.8075-2.0493.9936-2.9664.3258-1.4484-1.055-2.7233-2.3295-3.7783-3.7776-.6681-.9168-.4819-2.1691.3255-2.9659.5728-.6019.7584-1.4748.4802-2.2577-.3987-.98875-.6792-2.02109-.8358-3.07557-.2043-1.03534-1.1138-1.7807-2.1694-1.77778h-3.18289c-.60654-.00074-1.18614.25037-1.60035.69334-.40152.44503-.59539 1.03943-.53345 1.63555.344 3.31056 1.47164 6.49166 3.28961 9.27986 1.64878 2.5904 3.84608 4.7872 6.43688 6.4356 2.7927 1.797 5.9636 2.9227 9.2644 3.289h.1778c.5409.0036 1.0626-.2 1.4581-.569.444-.406.6957-.9806.6935-1.5822v-3.1821c.0429-1.0763-.7171-2.0185-1.7782-2.2046z"
      clipRule="evenodd"
    />
  </svg>
);

const ContactUs = () => {
  const contacts1 = [
    { name: "Keerthi Vaasan SJ", phone: "+91 9952647749" },
    { name: "Gowtham T", phone: "+91 9025896912" },
  ];
  const contacts2 = [
    { name: "Abdul Hameed EV", phone: "+91 8056747791" },
    { name: "Chandra Shekhar K", phone: "+91 8122116830" },
  ];

  return (
    <section className="bg-transparent text-gray p-6 rounded-md max-w-lg mx-auto">
      <h2 className="text-2xl text-center text-[#ff00cc] font-semibold mb-4">
        Reach Out
      </h2>
      <div className="flex items-center gap-x-4 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          height="33"
          width="33"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          className="flex-shrink-0"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#fff"
            d="M3 8l7.894 5.308c.63.424 1.648.424 2.278 0L21 8M5 19h14c1.657 0 3-1.343 3-3V7c0-1.657-1.343-3-3-3H5C3.343 4 2 5.343 2 7v9c0 1.657 1.343 3 3 3z"
          />
        </svg>
        <a
          href="mailto:symposium2024@jerusalemengg.ac.in"
          className="text-lg hover:underline"
        >
          symposium2024@jerusalemengg.ac.in
        </a>
      </div>
      {["TRACK 1", "TRACK 2"].map((track, index) => {
  const contacts = track === "TRACK 1" ? contacts1 : contacts2; // Choose the correct contacts array
  return (
    <div key={index} className="mt-6">
      <h3 className="text-lg text-[#ff00cc] font-semibold mb-2">
        {track}
      </h3>
      {contacts.map((contact, idx) => (
        <div key={idx} className="flex items-center gap-x-4 mb-4">
        <PhoneIcon />
        <p className="text-lg">
          {`${contact.name} : `}
          <a href={`tel:${contact.phone}`} className="hover:underline">
            {contact.phone}
          </a>
        </p>
      </div>      
      ))}
    </div>
  );
})}
    </section>
  );
};

export default ContactUs;
