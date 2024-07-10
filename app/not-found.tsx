import BaseBtn from "./_components/BaseBtn/BaseBtn";

export default function NotFound() {
  return (
    <div className="child-upper-center w-container grow text-center">
      <div className="py-section-md">
        <h4
          className="font-extrabold"
          style={{
            fontSize: `clamp(40px, 10vw, 120px)`,
          }}
        >
          404
        </h4>

        <BaseBtn size="lg" link="/">
          Return to home
        </BaseBtn>
      </div>
    </div>
  );
}
