import styles from "./vertex-logo.module.css";

export function VertexLogo({ small = false }: { small?: boolean }) {
  return (
    <span className={`${styles.logo}${small ? ` ${styles.small}` : ""}`}>
      <svg viewBox="0 0 38 36" role="img" aria-label="Vertex logo">
        <path fill="#f97316" d="M0 3h11l8 14 8-14h11L19 35z" />
        <path fill="#fff" d="M13 8h12l-6 11z" />
        <path fill="#f97316" d="M15.5 2h7l-3.5 6z" />
      </svg>
      <span>Vertex</span>
    </span>
  );
}
