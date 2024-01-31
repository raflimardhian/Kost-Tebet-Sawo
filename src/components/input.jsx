const fixedInputClass = "rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#8BC349] focus:border-[#8BC349] focus:z-10 sm:text-sm"

export default function Input({
  handleChange,
  heading,
  value,
  labelText,
  labelFor,
  id,
  name,
  type,
  isRequired = false,
  placeholder,
  customClass,
  isLogin
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <div className="flex justify-between">
        <label htmlFor={labelFor} className="text-left w-full ">
          {labelText}
        </label>
        {isLogin ?
          <div className="text-sm text-right w-full">
            <a href='/reset-password' className="font-medium text-[#8BC349] hover:text-[#17415F]">
              Lupa Kata Sandi
            </a>
          </div>
          : null}
      </div>
      <input
        onChange={handleChange}
        value={value}
        id={id}
        name={name}
        type={type}
        required={isRequired}
        className={fixedInputClass + customClass}
        placeholder={placeholder}
      />
      {
        name === "password"
          ?
          <small id="username-help">
            Password harus berisi min. 8 karakter, 1 huruf besar, 1 simbol, dan 1 angka.
          </small>
          :
          <></>
      }
    </div>
  )
}