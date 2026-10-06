import type { ReactNode } from "react";
import { Icon, type IconName } from "../../components/ui/icon";
import { VertexLogo } from "../../components/ui/vertex-logo";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { TextField } from "../../components/ui/text-field";
import { SelectField } from "../../components/ui/select-field";
import { ProgressBar } from "../../components/ui/progress-bar";
import styles from "./design-system.module.css";

function s(names: string) {
  return names
    .split(/\s+/)
    .filter(Boolean)
    .map((name) => {
      const className = styles[name];
      if (!className) throw new Error(`Missing design-system style: ${name}`);
      return className;
    })
    .join(" ");
}

function Heading({
  number,
  children,
}: {
  number: string;
  children: ReactNode;
}) {
  return (
    <h2 className={s("section-title")}>
      <span>{number}</span>
      {children}
    </h2>
  );
}

const primary = [
  ["Primary 500", "#F97316"],
  ["Primary 400", "#FB923C"],
  ["Primary 300", "#FDBA74"],
  ["Primary 200", "#FED7AA"],
  ["Primary 100", "#FFEDD5"],
];
const neutral = [
  ["Neutral 900", "#0F172A"],
  ["Neutral 700", "#334155"],
  ["Neutral 500", "#64748B"],
  ["Neutral 300", "#CBD5E1"],
  ["Neutral 200", "#E2E8F0"],
  ["Neutral 100", "#F1F5F9"],
  ["Neutral 50", "#FAFAFC"],
  ["White", "#FFFFFF"],
];
const typeRows = [
  ["Display 1", "Playfair Display", "48 / 56", "Bold", "Page titles"],
  ["Display 2", "Playfair Display", "36 / 44", "Bold", "Section titles"],
  ["Heading 1", "Inter", "28 / 36", "Semi Bold", "Card titles"],
  ["Heading 2", "Inter", "22 / 30", "Semi Bold", "Sub section"],
  ["Heading 3", "Inter", "18 / 26", "Medium", "Small titles"],
  ["Body Large", "Inter", "16 / 24", "Regular", "Body copy"],
  ["Body", "Inter", "14 / 20", "Regular", "Supporting text"],
  ["Small", "Inter", "12 / 16", "Regular", "Captions, meta"],
];
const iconNames: IconName[] = [
  "bell",
  "search",
  "play",
  "file",
  "bookmark",
  "bars",
  "clock",
  "user",
  "chevron",
];

export default function DesignSystem() {
  return (
    <main className={s("design-board")}>
      <section className={s("panel intro-panel")} aria-labelledby="page-title">
        <div className={s("intro-copy")}>
          <VertexLogo />
          <h1 id="page-title">Design System</h1>
          <p>
            A unified design language for Vertex learning platform. Clean,
            modern and focused on clarity, consistency and intuitive learning
            experiences.
          </p>
          <div className={s("version")}>
            VERSION 1.0 <span>·</span> MAY 2025
          </div>
        </div>
        <div className={s("colors-content")}>
          <Heading number="01">Colors</Heading>
          <div className={s("color-group")}>
            <h3>Primary</h3>
            <div className={s("color-row primary-row")}>
              {primary.map(([name, color]) => (
                <div className={s("color-item")} key={name}>
                  <div
                    className={s("swatch")}
                    style={{ backgroundColor: color }}
                  />
                  <span>{name}</span>
                  <code>{color}</code>
                </div>
              ))}
            </div>
          </div>
          <div className={s("color-group")}>
            <h3>Neutral</h3>
            <div className={s("color-row neutral-row")}>
              {neutral.map(([name, color]) => (
                <div className={s("color-item")} key={name}>
                  <div
                    className={s("swatch")}
                    style={{ backgroundColor: color }}
                  />
                  <span>{name}</span>
                  <code>{color}</code>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className={s("board-row board-row--type")}>
        <section className={s("panel")}>
          <Heading number="02">Typography</Heading>
          <div className={s("font-sample")}>
            <span className={s("font-glyph display-font")}>Ag</span>
            <div>
              <h3 className={s("display-font")}>Playfair Display</h3>
              <p>
                Elegant <b>·</b> Readable <b>·</b> Timeless
              </p>
            </div>
          </div>
          <div className={s("font-sample")}>
            <span className={s("font-glyph")}>Ag</span>
            <div>
              <h3>Inter</h3>
              <p>
                Clean <b>·</b> Modern <b>·</b> Highly legible
              </p>
            </div>
          </div>
        </section>
        <section className={s("panel type-scale-panel")}>
          <Heading number="03">Type Scale</Heading>
          <div className={s("table-wrap")}>
            <table className={s("type-table")}>
              <thead>
                <tr>
                  <th>Style</th>
                  <th>Font</th>
                  <th>Size / Line Height</th>
                  <th>Weight</th>
                  <th>Use</th>
                </tr>
              </thead>
              <tbody>
                {typeRows.map(([style, font, size, weight, use]) => (
                  <tr key={style}>
                    <td
                      className={s(
                        font === "Playfair Display" ? "display-font" : "",
                      )}
                    >
                      {style}
                    </td>
                    <td>{font}</td>
                    <td>{size}</td>
                    <td>{weight}</td>
                    <td>{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <div className={s("board-row board-row--spacing")}>
        <section className={s("panel spacing-panel")}>
          <Heading number="04">Spacing System</Heading>
          <p className={s("group-caption")}>Base unit: 4px</p>
          <div className={s("spacing-examples")}>
            {[
              [4, "0.25"],
              [8, "0.5"],
              [12, "0.75"],
              [16, "1"],
              [24, "1.5"],
              [32, "2"],
              [40, "2.5"],
              [48, "3"],
              [64, "4"],
            ].map(([px, rem]) => (
              <div className={s("spacing-item")} key={px}>
                <div
                  className={s("spacing-bar")}
                  style={{
                    width: `${px}px`,
                    height: `${Math.max(Number(px) * 0.58, 6)}px`,
                  }}
                />
                <strong>{px}</strong>
                <span>({rem}rem)</span>
              </div>
            ))}
          </div>
        </section>
        <section className={s("panel radius-panel")}>
          <Heading number="05">Radius &amp; Shadows</Heading>
          <p className={s("group-caption")}>Radius</p>
          <div className={s("radius-examples")}>
            {[
              ["4px", "xs", "4px"],
              ["8px", "sm", "8px"],
              ["12px", "md", "12px"],
              ["16px", "lg", "16px"],
              ["24px", "xl", "24px"],
              ["Full", "circle", "50%"],
            ].map(([label, name, radius]) => (
              <div className={s("radius-item")} key={name}>
                <div style={{ borderRadius: radius }} />
                <strong>{label}</strong>
                <span>({name})</span>
              </div>
            ))}
          </div>
          <p className={s("group-caption shadows-caption")}>Shadows</p>
          <div className={s("shadow-examples")}>
            {[
              ["Sm", "0 1px 2px 0 rgb(15 23 42 / .05)"],
              ["Md", "0 4px 12px -2px rgb(15 23 42 / .08)"],
              ["Lg", "0 12px 24px -4px rgb(15 23 42 / .10)"],
              ["Xl", "0 20px 40px -8px rgb(15 23 42 / .12)"],
            ].map(([label, value]) => (
              <div
                className={s(label === "Md" ? "shadow-box" : `shadow-box shadow-box--${label.toLowerCase()}`)}
                key={label}
              >
                <strong>{label}</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className={s("board-row board-row--controls")}>
        <section className={s("panel icons-panel")}>
          <Heading number="06">Icons</Heading>
          <p className={s("group-caption")}>Outline Style</p>
          <div className={s("icon-strip")}>
            {iconNames.map((name) => (
              <Icon key={name} name={name} size={17} />
            ))}
          </div>
          <p className={s("group-caption filled-caption")}>Filled Style</p>
          <div className={s("icon-strip")}>
            {iconNames.map((name) => (
              <Icon key={name} name={name} size={17} filled />
            ))}
          </div>
          <p className={s("group-caption icon-spec-title")}>Icon Specs</p>
          <ul className={s("spec-list")}>
            <li>24×24px grid</li>
            <li>2px stroke width (outline)</li>
            <li>Rounded line caps</li>
            <li>Consistent optical balance</li>
          </ul>
        </section>
        <section className={s("panel buttons-panel")}>
          <Heading number="07">Buttons</Heading>
          <div className={s("button-matrix")}>
            <span />
            <span>Primary</span>
            <span>Secondary</span>
            <span>Tertiary</span>
            <span>Text</span>
            {["Default", "Hover", "Disabled"].map((state) => (
              <div className={s("button-matrix-row")} key={state}>
                <span>{state}</span>
                <Button
                  variant="primary"
                  className={s(
                    `demo-button primary-button ${state === "Hover" ? "hover-example" : ""}`,
                  )}
                  disabled={state === "Disabled"}
                >
                  Get Started
                </Button>
                <Button
                  variant="secondary"
                  className={s(
                    `demo-button secondary-button ${state === "Hover" ? "hover-example" : ""}`,
                  )}
                  disabled={state === "Disabled"}
                >
                  Explore Courses
                </Button>
                <Button
                  variant="tertiary"
                  className={s(
                    `demo-button tertiary-button ${state === "Hover" ? "hover-example" : ""}`,
                  )}
                  disabled={state === "Disabled"}
                >
                  View Lesson <Icon name="external" size={12} />
                </Button>
                <Button
                  variant="text"
                  className={s(
                    `demo-button text-button ${state === "Hover" ? "hover-example" : ""}`,
                  )}
                  disabled={state === "Disabled"}
                >
                  Watch Video <Icon name="play" size={13} />
                </Button>
              </div>
            ))}
          </div>
          <p className={s("group-caption button-spec-title")}>Button Specs</p>
          <ul className={s("spec-list")}>
            <li>Height: 44px (default)</li>
            <li>Padding: 0 16px (lg), 0 12px (md)</li>
            <li>Radius: 12px</li>
            <li>Font: Inter Medium (14–16px)</li>
          </ul>
        </section>
        <section className={s("panel inputs-panel")}>
          <Heading number="08">Inputs</Heading>
          <label className={s("group-caption")} htmlFor="sample-search">
            Search / Text Input
          </label>
          <TextField
            className={s("search-field")}
            leadingIcon={<Icon name="search" size={16} />}
            id="sample-search"
            type="search"
            placeholder="Search anything..."
            shortcut="⌘ K"
          />
          <label
            className={s("group-caption select-title")}
            htmlFor="sample-sort"
          >
            Select
          </label>
          <SelectField id="sample-sort" defaultValue="Most Relevant">
            <option>Most Relevant</option>
            <option>Newest First</option>
            <option>Most Popular</option>
          </SelectField>
          <p className={s("group-caption input-spec-title")}>Field Specs</p>
          <ul className={s("spec-list")}>
            <li>Height: 44px</li>
            <li>Radius: 12px</li>
            <li>Border: 1px solid #E2E8F0</li>
            <li>Padding: 0 16px</li>
            <li>Focus: Border color #FB923C</li>
          </ul>
        </section>
      </div>

      <div className={s("board-row board-row--mini")}>
        <section className={s("panel")}>
          <Heading number="09">Badges / Tags</Heading>
          <div className={s("badge-grid")}>
            <div>
              <span>Video</span>
              <Badge variant="video">VIDEO</Badge>
            </div>
            <div>
              <span>Lesson</span>
              <Badge variant="lesson">LESSON</Badge>
            </div>
            <div>
              <span>Popular</span>
              <Badge variant="popular">POPULAR</Badge>
            </div>
          </div>
        </section>
        <section className={s("panel")}>
          <Heading number="10">Status / Indicators</Heading>
          <div className={s("statuses")}>
            <span>
              <i className={s("progress-ring")} />
              In Progress
            </span>
            <span>
              <Icon name="check" size={16} />
              Completed
            </span>
            <span>
              <Icon name="play" size={16} filled />
              Now Playing
            </span>
            <span>
              <Icon name="lock" size={15} />
              Locked
            </span>
          </div>
        </section>
        <section className={s("panel progress-panel")}>
          <Heading number="11">Progress Bar</Heading>
          <div className={s("progress-content")}>
            <ProgressBar
              value={35}
              label="Course progress"
              className={s("progress-track")}
            />
            <span>
              <strong>35%</strong> complete
            </span>
          </div>
        </section>
      </div>

      <section className={s("panel cards-panel")}>
        <Heading number="12">Cards</Heading>
        <div className={s("card-examples")}>
          <div className={s("card-example")}>
            <span className={s("card-label")}>Course Card</span>
            <article className={s("sample-card")}>
              <div className={s("course-card-top")}>
                <div className={s("next-mark")}>N</div>
                <div>
                  <h3>Next.js for Production</h3>
                  <p>
                    Build scalable, high-performance web applications with
                    Next.js.
                  </p>
                </div>
              </div>
              <div className={s("card-meta")}>
                <span>
                  <Icon name="bars" size={13} />
                  Intermediate
                </span>
                <span>
                  <Icon name="clock" size={13} />
                  18h 24m
                </span>
                <span>
                  <Icon name="folder" size={13} />
                  12 modules
                </span>
              </div>
            </article>
          </div>
          <div className={s("card-example")}>
            <span className={s("card-label")}>Lesson Card (Video)</span>
            <article className={s("sample-card")}>
              <Badge variant="video" className={s("lesson-badge")}>
                VIDEO
              </Badge>
              <h3>Data Fetching in Server Components</h3>
              <p>
                Learn how to fetch data on the server using async/await and
                Next.js best practices.
              </p>
              <div className={s("card-footer")}>
                <span>
                  Lesson 5.1 <b>·</b> 12:45
                </span>
                <button>
                  <Icon name="play" size={14} />
                  Watch from 12:45
                </button>
              </div>
            </article>
          </div>
          <div className={s("card-example")}>
            <span className={s("card-label")}>Lesson Card (Lesson)</span>
            <article className={s("sample-card")}>
              <Badge variant="lesson" className={s("lesson-badge")}>
                LESSON
              </Badge>
              <h3>Data Fetching &amp; Caching</h3>
              <p>
                Explore different data fetching methods in Next.js and how to
                cache and revalidate data for optimal performance.
              </p>
              <div className={s("card-footer")}>
                <span>Module 5</span>
                <button>
                  View lesson <Icon name="external" size={13} />
                </button>
              </div>
            </article>
          </div>
          <div className={s("card-example")}>
            <span className={s("card-label")}>Resource Card</span>
            <article className={s("sample-card resource-card")}>
              <div className={s("resource-top")}>
                <Icon name="file" size={23} />
                <div>
                  <h3>Caching and Revalidation Guide</h3>
                  <p>Deep dive into Next.js caching strategies.</p>
                </div>
              </div>
              <div className={s("card-footer")}>
                <span>
                  PDF <b>·</b> 1.2 MB
                </span>
                <button aria-label="Open Caching and Revalidation Guide">
                  <Icon name="external" size={15} />
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className={s("panel navigation-panel")}>
        <Heading number="13">Navigation</Heading>
        <div className={s("nav-example")}>
          <div className={s("nav-brand")}>
            <VertexLogo small />
            <span className={s("active-nav")}>Courses</span>
            <span>My Learning</span>
          </div>
          <div className={s("breadcrumb-block")}>
            <span>Breadcrumbs</span>
            <div>
              All Courses <Icon name="chevron" size={12} /> Next.js for
              Production <Icon name="chevron" size={12} /> Data Fetching &amp;
              Caching
            </div>
          </div>
          <div className={s("pagination-block")}>
            <span>Pagination</span>
            <div>
              <Icon name="chevron" size={14} />
              <b>1</b>
              <span>2</span>
              <span>3</span>
              <span>...</span>
              <span>8</span>
              <Icon name="chevron" size={14} />
            </div>
          </div>
        </div>
      </section>
      <section className={s("panel principles-panel")}>
        <Heading number="14">Principles</Heading>
        <div className={s("principles")}>
          <div>
            <Icon name="eye" size={29} />
            <p>
              <strong>Clarity First</strong>
              <span>Every element should communicate clearly.</span>
            </p>
          </div>
          <div>
            <Icon name="grid" size={29} />
            <p>
              <strong>Consistency</strong>
              <span>
                Use components and patterns consistently across the platform.
              </span>
            </p>
          </div>
          <div>
            <Icon name="target" size={29} />
            <p>
              <strong>Focus &amp; Calm</strong>
              <span>Remove noise and help learners focus on what matters.</span>
            </p>
          </div>
          <div>
            <Icon name="accessibility" size={29} />
            <p>
              <strong>Accessible</strong>
              <span>Design with accessibility and inclusivity in mind.</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
