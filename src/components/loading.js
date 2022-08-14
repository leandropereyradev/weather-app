import LoadingSpin from "react-loading-spin";
export default function Loading() {
  return (
    <div className="loadingContainer">
      <div>
        <LoadingSpin />
      </div>
    </div>
  );
}
