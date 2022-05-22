import {
  Navigate as ReactRouterNavigate,
  NavigateProps,
  useNavigate as useReactRouterNavigate,
  useSearchParams,
} from "react-router-dom";

export function useNavigate() {
  const baseNavigate = useReactRouterNavigate();
  const [searchParams] = useSearchParams();
  const presenterMode = searchParams.get("presenterMode");

  function navigate(route: string) {
    return baseNavigate(
      presenterMode ? route + `?presenterMode=${presenterMode}` : route
    );
  }

  return navigate;
}

export function Navigate(props: NavigateProps) {
  const [searchParams] = useSearchParams();
  const presenterMode = searchParams.get("presenterMode");

  return (
    <ReactRouterNavigate
      {...props}
      to={
        presenterMode ? props.to + `?presenterMode=${presenterMode}` : props.to
      }
    />
  );
}
