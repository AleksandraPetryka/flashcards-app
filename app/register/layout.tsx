import Image from "next/image";
import software_engineer from "../../assets/software_engineer.png";
function RegisterLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Image
        src={software_engineer}
        alt="picture of software engineer"
        className="w-711 h-449"
      />
      {children}
    </div>
  );
}

export default RegisterLayout;
