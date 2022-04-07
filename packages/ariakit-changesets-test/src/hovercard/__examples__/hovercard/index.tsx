import {
  Hovercard,
  HovercardAnchor,
  HovercardHeading,
  useHovercardState,
} from "ariakit-changesets-test/hovercard";
import "./style.css";

export default function Example() {
  const hovercard = useHovercardState({ gutter: 16 });
  return (
    <div className="wrapper">
      <HovercardAnchor
        state={hovercard}
        href="https://twitter.com/ariakit-changesets-testjs"
        className="anchor"
      >
        @ariakit-changesets-testjs
      </HovercardAnchor>
      <Hovercard state={hovercard} className="hovercard">
        <img
          src="https://pbs.twimg.com/profile_images/1116178840467005440/cwXwfYjW_400x400.png"
          alt="ariakit-changesets-test"
          className="avatar"
        />
        <HovercardHeading className="username">
          ariakit-changesets-test
        </HovercardHeading>
        <p>Toolkit for building accessible web apps with React.</p>
        <a
          href="https://twitter.com/ariakit-changesets-testjs"
          className="button"
        >
          Follow
        </a>
      </Hovercard>
    </div>
  );
}
