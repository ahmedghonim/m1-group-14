import Footer from "../_components/public-page/layout/footer";
import NavBar from "../_components/public-page/layout/nav-bar";

export default function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer lang={params.lang} />
    </>
  );
}
