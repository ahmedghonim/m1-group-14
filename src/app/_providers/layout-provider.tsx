import { getDictionary } from "@/dictionary";
import Footer from "../_components/public-page/layout/footer";
import NavBar from "../_components/public-page/layout/nav-bar";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const { common } = await getDictionary(params.lang);
  return (
    <>
      <NavBar common={common} lang={params.lang} />
      <div>{children}</div>
      <Footer lang={params.lang} />
    </>
  );
}
