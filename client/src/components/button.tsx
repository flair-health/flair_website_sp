import { Button } from "../../components/ui/button";

type TbuttonProps = {
  title: string;
  onClick?: () => void;
};

export default function CTAButton({ title }: TbuttonProps) {
  return (
    <Button
      asChild
      className="bg-[#14a8e1] hover:bg-[#0f8bb5] text-white cursor-pointer group relative inline-flex rounded-full font-semibold backdrop-blur transition-colors duration-200 border-none dark:bg-[#14a8e1] dark:hover:bg-[#0f8bb5]"
    >
      <a
        href="/#contact"
        // activeClass="active"
        // smooth
        // spy
        // offset={-100}
        className="font-semibold text-lg"
      >
        {title}
      </a>
    </Button>
  );
}