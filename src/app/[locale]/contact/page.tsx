import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { formInputStyle, formTextAreaStyle } from "./styles";
import { BiPaperPlane } from "react-icons/bi";
import { getI18n } from "@/locales/server";

export default async function Home() {
  const t = await getI18n();
  return (
    <div className="flex w-full flex-col gap-6">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.4573961342185!2d32.4916999!3d37.9897904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08dc9049a3001%3A0x743b85efc4d60e56!2sZeo%20Karavan!5e0!3m2!1sen!2str!4v1739456683932!5m2!1sen!2str"
        loading="eager"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[45vh] w-full"
      />
      <div className="mx-auto grid w-full max-w-[1500px] grid-cols-1 lg:grid-cols-2">
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
          className="flex w-full flex-col items-start gap-2 rounded-lg border-2 border-[#C1C1C1] p-4 shadow-md"
          action="https://formsubmit.co/info@zeokaravan.com"
          encType="multipart/form-data"
        >
          <input
            type="text"
            name="Sayfa"
            value="İletişim"
            className="hidden"
            readOnly
          />
          <input type="hidden" name="_captcha" value="false" readOnly />
          <input type="text" name="_honey" className="invisible h-0" />
          <input
            type="text"
            name="İsim"
            placeholder={t("your-name")}
            className={formInputStyle}
            required
          />
          <input
            type="text"
            name="Şehir"
            placeholder={t("your-city")}
            className={formInputStyle}
          />
          <input
            type="phone"
            name="Telefon"
            placeholder={t("your-phone")}
            className={formInputStyle}
          />
          <input
            type="email"
            name="E-posta"
            placeholder={t("your-email")}
            className={formInputStyle}
          />
          <textarea
            name="Mesaj"
            placeholder={t("short-description")}
            className={formTextAreaStyle}
            required
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
