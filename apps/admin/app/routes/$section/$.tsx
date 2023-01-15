import { routes } from "routes"
import { RouteLink } from "~/components/RouteLink"

export default function Fallback() {
  return (
    <>
      <h1>Zde nic není.</h1>
      <p>
        Možná hledáš{" "}
        <RouteLink route={routes.pages.list.route()}>výpis stránek</RouteLink>.
      </p>
    </>
  )
}
