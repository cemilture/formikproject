import { object, string, number, ref, boolean } from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const generalFormSchema = object({
  email: string()
    .email("Geçerli bir email adresi giriniz")
    .required("Email adresini girmeniz gerekiyor"),
  age: number()
    .positive("Lütfen pozitif bir yaş giriniz")
    .integer("Lütfen yaşınızı tam sayı olarak giriniz")
    .required("Yaşınızı girmeniz gerekiyor"),
  password: string()
    .min(5, "Lütfen en az 5 karakter giriniz")
    .matches(
      passwordRules,
      "Lütfen en az bir büyük harf, bir küçük harf ve bir sayı giriniz"
    )
    .required("Şifrenizi girmeniz gerekiyor"),
  confirmPassword: string()
    .oneOf([ref("password")], "Şifreler eşleşmiyor")
    .required("Şifrenizi tekrar girmeniz gerekiyor"),
});

export const portalFormSchema = object({
  username: string()
    .min(3, "Kullanıcı adı en az üç karakter olmalıdır")
    .required("Kullanıcı adı zorunludur"),
  university: string()
    .oneOf(["boun", "gsu", "odtu", "itu"], "Lütfen üniversitenizi seçiniz")
    .required("Lütfen üniversitenizi seçiniz"),
  isAccepted: boolean().oneOf([true], "Kullanım koşullarını kabul ediniz"),
});
