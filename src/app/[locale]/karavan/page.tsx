import { BiPaperPlane } from "react-icons/bi";
import { getI18n } from "@/locales/server";
import {
  formInputStyle,
  formTextAreaStyle,
  fromAttachmentStyle,
} from "../contact/page";
import Image from "next/image";

export default async function Caravan() {
  const t = await getI18n();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="p-4">
        <div className="relative aspect-square w-full">
          <Image
            src={"/karavan2.webp"}
            alt="Zeo Karavan"
            fill
            priority
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="p-4">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-bold">{t("caravan-title")}</h1>
          <p>
            Her şeyi ile size özel, adeta üzerinize dikilmiş bir takım elbise
            gibi karavan yaptırmaksa düşünceniz bizim kahvemiz acı, muhabbetimiz
            koyudur.
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
              value="Karavan"
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
            <input
              type="text"
              name="Araç"
              placeholder={t("caravan-vehicle")}
              className={formInputStyle}
            />
            <label className={fromAttachmentStyle}>
              <span>{t("project-attachment")}</span>
              <input
                type="file"
                name="Ek Dosyalar"
                multiple
                accept="application/pdf, image/png, image/jpeg, image/jpg, .zip, .rar"
                className="hidden"
              />
            </label>
            <textarea
              required
              name="Mesaj"
              placeholder={t("project-description")}
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
