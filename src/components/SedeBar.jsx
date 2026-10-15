import { dealer } from "../data/dealer.js";
import { useSede } from "./SedeContext.jsx";
import { IconPin, IconMail, IconPhone } from "./Icons.jsx";

export default function SedeBar() {
  const { sede, abrirModal } = useSede();
  const direccion = sede?.direccion || dealer.address;
  const telefono = sede?.asesores?.[0]?.telefono || dealer.phone;
  return (
    <div className="sede-bar">
      <div className="container sede-bar__inner">
        <span className="sede-bar__loc">
          <IconPin width="15" height="15" />
          <span className="sede-bar__dir">{direccion}</span>
          <button type="button" className="sede-bar__change" onClick={abrirModal}>
            Cambiar sede
          </button>
        </span>
        <span className="sede-bar__right">
          <a className="sede-bar__mail" href={`mailto:${dealer.email}`}>
            <IconMail width="15" height="15" />
            {dealer.email}
          </a>
          <a className="sede-bar__phone" href={`tel:${telefono.replace(/\s+/g, "")}`}>
            <IconPhone width="14" height="14" />
            {telefono}
          </a>
        </span>
      </div>
    </div>
  );
}

