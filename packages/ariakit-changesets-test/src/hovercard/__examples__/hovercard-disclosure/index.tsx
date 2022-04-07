import {
  Hovercard,
  HovercardAnchor,
  HovercardDisclosure,
  HovercardHeading,
  useHovercardState,
} from "ariakit-changesets-test/hovercard";
import { VisuallyHidden } from "ariakit-changesets-test/visually-hidden";
import { HiChevronDown } from "react-icons/hi";
import "./style.css";

export default function Example() {
  const hovercard = useHovercardState({ gutter: 16 });
  const element = (
    <span className="hovercard-wrapper">
      <HovercardAnchor
        state={hovercard}
        href="https://twitter.com/ariakit-changesets-testjs"
        className="anchor"
      >
        @ariakit-changesets-testjs
      </HovercardAnchor>
      <HovercardDisclosure state={hovercard} className="disclosure">
        <VisuallyHidden>
          More details about @ariakit-changesets-testjs
        </VisuallyHidden>
        <HiChevronDown size={20} />
      </HovercardDisclosure>
      <Hovercard portal state={hovercard} className="hovercard">
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
    </span>
  );
  return (
    <p>Focus on {element} using the keyboard to see the disclosure button.</p>
  );
}
