export const displayNameSchema = {
  required: "Поля является обязательной",
  minLength: { value: 1, message: "минимум 1" },
  maxLength: { value: 70, message: "макмиум 70" },
};

export const usernameSchema = {
  required: "Поля является обязательной",
  minLength: { value: 1, message: "минимум 1" },
  maxLength: { value: 200, message: "макмиум 200" },
};

export const pswSchema = {
  required: "Поля является обязательной",
  minLength: { value: 6, message: "минимум 6" },
  maxLength: { value: 200, message: "макмиум 200" },
};
