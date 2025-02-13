import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { BiPaperPlane } from "react-icons/bi";
import { getI18n } from "@/locales/server";

const inputStyle =
  "w-full rounded-xl border border-gray-300 bg-gray-500 px-4 py-3 hover:bg-slate-500 focus:border-transparent focus:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-white";

export default async function Home() {
  const t = await getI18n();
  return (
    <div className="flex w-full flex-col gap-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.4573961342185!2d32.4916999!3d37.9897904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08dc9049a3001%3A0x743b85efc4d60e56!2sZeo%20Karavan!5e0!3m2!1sen!2str!4v1739456683932!5m2!1sen!2str"
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[45vh] w-full invert"
      />
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 md:grid-cols-2">
        <div className="mx-auto flex w-full max-w-md flex-col items-center justify-center p-6">
          <div className="flex flex-col items-start gap-4">
            <a href="tel:+905325433039">
              <div className="flex flex-row items-center gap-3">
                <FaPhone className="text-xl text-blue-500" />
                <h1 className="text-lg font-semibold">+90 532 543 30 39</h1>
              </div>
            </a>
            <a href="mailto:info@zeokaravan.com">
              <div className="flex flex-row items-center gap-3">
                <FaEnvelope className="text-xl text-blue-500" />
                <h1 className="text-lg font-semibold">info@zeokaravan.com</h1>
              </div>
            </a>
            <a href="https://maps.app.goo.gl/jEw5HvsaGaWwAUXa7">
              <div className="flex flex-row items-center gap-3">
                <FaMapMarkerAlt className="text-xl text-blue-500" />
                <div>
                  <p className="text-xl font-medium">
                    Beyhekim, Turgut Özal Cd.
                  </p>
                  <p className="text-xl font-medium">Binsa İş Mrk D:7A-Z,</p>
                  <p className="text-xl font-medium">42130 Selçuku/Konya</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        <form
          method="POST"
          className="flex w-full flex-col items-start gap-2 rounded-lg bg-gray-600 p-4"
          action="https://formsubmit.co/info@zeokaravan.com"
          encType="multipart/form-data"
        >
          <input
            type="text"
            name="İsim"
            placeholder={t("your-name")}
            className={inputStyle}
          />
          <input
            type="text"
            name="Şehir"
            placeholder={t("your-city")}
            className={inputStyle}
          />
          <input
            type="phone"
            name="Telefon"
            placeholder={t("your-phone")}
            className={inputStyle}
          />
          <input
            type="email"
            name="E-posta"
            placeholder={t("your-email")}
            className={inputStyle}
          />
          <textarea
            name="Mesaj"
            placeholder={t("short-description")}
            className="h-32 w-full resize-none rounded-xl border border-gray-300 bg-gray-50 bg-gray-500 px-4 py-3 placeholder:text-white hover:bg-gray-100 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            className="flex w-full cursor-pointer flex-row items-center justify-center gap-2 rounded-xl bg-blue-400 px-4 py-2"
            type="submit"
          >
            <p className="text-lg font-semibold">{t("send-message")}</p>
            <BiPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
}
