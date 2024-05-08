import { TLoading } from "../../../types/shared"


type loadingProps = {
  loading: TLoading,
  error: null | string,
  children: React.ReactNode
}
export default function Loading({ loading, error, children }: loadingProps) {
  if (loading === "pending") {
    return (
      <p>Page is Loading please wait....</p>
    )
  }
  if (loading === "failed") {
    return (
      <p>{error}</p>
    )
  }
  return (

    <>
      {children}
    </>
  )
}
