import { formInputStyle, formTextAreaStyle } from "../contact/styles";
import { BiPaperPlane } from "react-icons/bi";
import { getI18n } from "@/locales/server";
import Image from "next/image";

export default async function Towbar() {
  const t = await getI18n();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="p-4">
        <div className="relative aspect-square w-full">
          <Image
            src={"/ceki-demiri.webp"}
            alt="Zeo Karavan"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="p-4">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-bold">{t("tow-hitch")}</h1>
          <p>
            Her marka model araç için çeki demiri montajı, proje ve tescil
            işlemleri.
          </p>
          <p>
            Alttakı formu doldurup gönderin, size en kısa süre içinde dönüş
            sağlayacağız.
          </p>
          <form
            method="POST"
            className="flex w-full flex-col items-start gap-2 rounded-lg border-2 border-[#C1C1C1] p-4 shadow-md"
            action="https://formsubmit.co/info@zeokaravan.com"
            encType="multipart/form-data"
          >
            <input
              type="text"
              name="Sayfa"
              value="Çeki Demiri"
              className="hidden"
              readOnly
            />
            <input
              type="text"
              name="İsim"
              placeholder={t("your-name")}
              className={formInputStyle}
              required
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
            <input
              type="text"
              name="Araç"
              placeholder={t("caravan-vehicle")}
              className={formInputStyle}
              required
            />
            <textarea
              name="Mesaj"
              placeholder={t("extra-description")}
              className={formTextAreaStyle}
            ></textarea>
            <input type="hidden" name="_captcha" value="false" readOnly />
            <input type="text" name="_honey" className="invisible h-0" />
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
    </div>
  );
}
