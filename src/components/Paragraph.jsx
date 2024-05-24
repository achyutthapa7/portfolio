const Paragraph = ({ mouseEnter, mouseLeave, mouseMove }) => {
  const paragraph = {
    transition: `transition ease-linear delay-150 inline-block`,
  };
  return (
    <div className="my-0 flex flex-col">
      <p
        className={`my-0 text-[2em] font-bold text-slate-900 leading-10 inline-block tracking-[7.5px]`}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <span
          className={`${paragraph.transition} ${
            mouseMove ? "rotate-[12deg]" : ""
          } ${mouseMove ? "translate-y-[-5px]" : ""}`}
        >
          F
        </span>
        <span
          className={`${paragraph.transition} ${
            mouseMove ? "rotate-[-10deg]" : ""
          } ${mouseMove ? "translate-y-[2px]" : ""}`}
        >
          U
        </span>
        <span
          className={`${paragraph.transition} ${
            mouseMove ? "rotate-[12deg] " : ""
          } ${mouseMove ? "translate-y-[-3px]" : ""}`}
        >
          L
        </span>
        <span
          className={`${paragraph.transition} ${
            mouseMove ? "rotate-[-10deg]" : ""
          } ${mouseMove ? "translate-y-[3px]" : ""}`}
        >
          L
        </span>
        <span
          className={`${paragraph.transition} ${
            mouseMove ? "rotate-[12deg]" : ""
          } ${mouseMove ? "translate-y-[-2px]" : ""}`}
        >
          S
        </span>
        <span
          className={`${paragraph.transition} ${
            mouseMove ? "rotate-[-10deg]" : ""
          } ${mouseMove ? "translate-y-[-1px]" : ""}`}
        >
          T
        </span>
        <span
          className={`${paragraph.transition} ${
            mouseMove ? " rotate-[12deg] " : ""
          } ${mouseMove ? "translate-y-[2.3px]" : ""}`}
        >
          A
        </span>
        <span
          className={`${paragraph.transition} ${
            mouseMove ? "rotate-[-10deg]" : ""
          } ${mouseMove ? "translate-y-[-5px]" : ""}`}
        >
          C
        </span>
        <span
          className={`${paragraph.transition} ${
            mouseMove ? "rotate-[-10deg]" : ""
          } ${mouseMove ? "translate-y-[5px]" : ""}`}
        >
          K
        </span>
      </p>
      <p
        className={`my-0 text-[2em] font-bold text-slate-900 leading-10 inline-block tracking-[7.5px]`}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <span
          className={`${paragraph.transition} ${
            mouseMove ? "rotate-[12deg]" : ""
          } ${mouseMove ? "translate-y-[-10px]" : ""}`}
        >
          D
        </span>
        <span
          className={`${paragraph.transition} ${
            mouseMove ? "rotate-[-10deg]" : ""
          }`}
        >
          E
        </span>
        <span
          className={`${paragraph.transition} ${
            mouseMove ? "rotate-[12deg] " : ""
          } ${mouseMove ? "translate-y-[-7px]" : ""}`}
        >
          V
        </span>
        <span
          className={`${paragraph.transition} ${
            mouseMove ? "rotate-[-10deg]" : ""
          }`}
        >
          E
        </span>
        <span
          className={`${paragraph.transition} ${
            mouseMove ? "rotate-[12deg]" : ""
          } ${mouseMove ? "translate-y-[-9px]" : ""}`}
        >
          L
        </span>
        <span
          className={`${paragraph.transition} ${
            mouseMove ? "rotate-[-10deg]" : ""
          } ${mouseMove ? "translate-y-[-6px]" : ""}`}
        >
          O
        </span>
        <span
          className={`${paragraph.transition} ${
            mouseMove ? " rotate-[12deg] " : ""
          }`}
        >
          P
        </span>
        <span
          className={`${paragraph.transition} ${
            mouseMove ? "rotate-[-10deg]" : ""
          } ${mouseMove ? "translate-y-[-10px]" : ""}`}
        >
          E
        </span>
        <span
          className={`${paragraph.transition} ${
            mouseMove ? "rotate-[-10deg]" : ""
          }`}
        >
          R
        </span>
      </p>
    </div>
  );
};
export default Paragraph