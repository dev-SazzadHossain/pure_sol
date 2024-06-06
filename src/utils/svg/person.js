import React from "react";

const Person = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={17}
      height={20}
      viewBox="0 0 17 20"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.623 8.22281C10.6864 9.15939 9.54049 9.63409 8.21694 9.63409C6.8937 9.63409 5.74776 9.15924 4.81102 8.22296C3.87459 7.28653 3.39974 6.14059 3.39974 4.81689C3.39974 3.4935 3.87459 2.34756 4.81102 1.41113C5.74746 0.474701 6.89324 0 8.21694 0C9.54033 0 10.6863 0.474701 11.6229 1.41098C12.5594 2.34772 13.0341 3.49365 13.0341 4.81689C13.0341 6.14059 12.5593 7.28638 11.623 8.22281ZM8.21694 1.17203C7.20131 1.17203 6.35842 1.5213 5.63988 2.23984C4.92119 2.95853 4.57177 3.80157 4.57177 4.81689C4.57177 5.83252 4.92119 6.67557 5.63988 7.3941C6.35872 8.11264 7.20162 8.46207 8.21694 8.46207C9.23241 8.46207 10.0755 8.11279 10.7941 7.3941C11.5127 6.67542 11.8621 5.83252 11.8621 4.81689C11.8621 3.80157 11.5127 2.95853 10.7941 2.23984C10.0755 1.5213 9.23241 1.17203 8.21694 1.17203ZM16.4836 14.1153C16.564 14.5642 16.6187 14.9893 16.6457 15.379C16.6724 15.7599 16.6859 16.1574 16.6861 16.5604C16.6861 17.6047 16.3542 18.4502 15.6996 19.073C15.0531 19.6881 14.198 20 13.1581 20H3.52798C2.48779 20 1.63269 19.6881 0.986328 19.073C0.331879 18.4497 0 17.6045 0 16.5605C0 16.1589 0.0134277 15.7614 0.039978 15.3795C0.0669861 14.9889 0.12146 14.5636 0.202026 14.1153C0.283203 13.663 0.387726 13.2356 0.512695 12.8449C0.64209 12.4407 0.817871 12.0419 1.035 11.6597C1.26022 11.2631 1.52512 10.9178 1.82236 10.6334C2.13348 10.3357 2.51419 10.0966 2.95395 9.9225C3.39233 9.74885 3.87817 9.66081 4.39819 9.66081C4.60236 9.66081 4.7998 9.74458 5.18082 9.99284C5.41901 10.148 5.69366 10.325 5.99716 10.519C6.2587 10.6859 6.61377 10.8423 7.0517 10.9837C7.47971 11.1221 7.91397 11.1923 8.34244 11.1923C8.77121 11.1923 9.20547 11.1221 9.63318 10.9837C10.0716 10.8421 10.4265 10.6857 10.6885 10.5188C10.9949 10.323 11.2694 10.146 11.5041 9.99299C11.8854 9.74473 12.0828 9.66096 12.287 9.66096C12.8069 9.66096 13.2928 9.74885 13.7314 9.92234C14.1714 10.0968 14.552 10.3359 14.8628 10.6333C15.1601 10.9175 15.425 11.263 15.6503 11.6597C15.8678 12.0419 16.0434 12.4408 16.1728 12.8447C16.2979 13.2355 16.4024 13.663 16.4836 14.1153ZM13.158 18.828C13.8974 18.828 14.4644 18.6304 14.8915 18.2239C15.3104 17.8253 15.5139 17.2812 15.5141 16.5605C15.5139 16.1847 15.5014 15.8148 15.4765 15.461V15.4607C15.4524 15.1128 15.403 14.7298 15.33 14.3222C15.258 13.9208 15.166 13.5439 15.0566 13.2021C14.9519 12.8751 14.8088 12.5508 14.6313 12.2388C14.4621 11.9409 14.2674 11.6856 14.0526 11.4801C13.8516 11.2879 13.5983 11.1302 13.3 11.0121C13.0238 10.9029 12.7136 10.8431 12.3767 10.8341C12.3357 10.8559 12.2626 10.8977 12.1442 10.9747C11.9032 11.1319 11.6333 11.3059 11.3191 11.5067C10.9726 11.7276 10.5269 11.9267 9.99374 12.099C9.44946 12.2749 8.89389 12.3644 8.34259 12.3644C7.79129 12.3644 7.23587 12.2749 6.69128 12.0989C6.1586 11.9269 5.71274 11.7276 5.36667 11.507C5.05966 11.3109 4.78195 11.1318 4.54102 10.9747C4.42261 10.8975 4.34952 10.8559 4.30847 10.8341C3.97171 10.8431 3.6615 10.9029 3.38547 11.0121C3.08701 11.1302 2.83371 11.2877 2.63275 11.4801C2.41791 11.6858 2.22321 11.9411 2.05399 12.2386C1.87668 12.5508 1.7337 12.8749 1.62888 13.2022C1.51962 13.5436 1.42776 13.9206 1.35559 14.3224C1.2825 14.7292 1.23322 15.112 1.20911 15.4605C1.18439 15.8157 1.17203 16.1858 1.17203 16.5605C1.17203 17.281 1.37558 17.8253 1.79443 18.224C2.22137 18.6304 2.78839 18.828 3.52798 18.828H13.158Z"
        fill="#6F7782"
      />
    </svg>
  );
};

export default Person;
