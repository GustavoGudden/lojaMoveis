import { GithubLogo, LinkedinLogo } from "phosphor-react";
import * as C from "./style";

function Header() {
  return (
    <C.Header>
      <C.Area>
        <h1>Loja@Moveis</h1>
        <p>produtos</p>
        <p>lojas</p>
        <p>parceiros</p>
      </C.Area>
      <div>
        <GithubLogo size={32} color="#ffffff" />
        <LinkedinLogo size={32} color="#ffffff" />
      </div>
    </C.Header>
  );
}

export default Header;
