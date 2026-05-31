import type { Components } from "react-markdown";
import { cn } from "@/lib/utils";

export const markdownComponents: Components = {
  h1: ({ children, className, ...props }) => (
    <h1
      className={cn("text-2xl font-bold mt-6 mb-3 first:mt-0", className)}
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, className, ...props }) => (
    <h2
      className={cn("text-xl font-bold mt-5 mb-2 first:mt-0", className)}
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, className, ...props }) => (
    <h3
      className={cn("text-lg font-bold mt-4 mb-2 first:mt-0", className)}
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, className, ...props }) => (
    <h4
      className={cn("text-base font-bold mt-3 mb-2 first:mt-0", className)}
      {...props}
    >
      {children}
    </h4>
  ),
  h5: ({ children, className, ...props }) => (
    <h5
      className={cn("text-sm font-bold mt-3 mb-1 first:mt-0", className)}
      {...props}
    >
      {children}
    </h5>
  ),
  h6: ({ children, className, ...props }) => (
    <h6
      className={cn("text-sm font-bold mt-3 mb-1 first:mt-0", className)}
      {...props}
    >
      {children}
    </h6>
  ),
  p: ({ children, className, ...props }) => (
    <p
      className={cn("text-sm leading-relaxed mb-3 last:mb-0", className)}
      {...props}
    >
      {children}
    </p>
  ),
  strong: ({ children, className, ...props }) => (
    <strong className={cn("font-bold", className)} {...props}>
      {children}
    </strong>
  ),
  em: ({ children, className, ...props }) => (
    <em className={cn("italic", className)} {...props}>
      {children}
    </em>
  ),
  del: ({ children, className, ...props }) => (
    <del
      className={cn("line-through text-muted-foreground", className)}
      {...props}
    >
      {children}
    </del>
  ),
  ul: ({ children, className, ...props }) => (
    <ul
      className={cn(
        "list-disc pl-6 mb-3 text-sm",
        className?.includes("contains-task-list") && "list-none pl-0",
        className,
      )}
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, className, ...props }) => (
    <ol className={cn("list-decimal pl-6 mb-3 text-sm", className)} {...props}>
      {children}
    </ol>
  ),
  li: ({ children, className, ...props }) => (
    <li
      className={cn(
        "mb-1",
        className?.includes("task-list-item") &&
          "flex items-start gap-2 list-none",
        className,
      )}
      {...props}
    >
      {children}
    </li>
  ),
  blockquote: ({ children, className, ...props }) => (
    <blockquote
      className={cn(
        "border-l-4 border-border pl-4 italic text-muted-foreground mb-3",
        className,
      )}
      {...props}
    >
      {children}
    </blockquote>
  ),
  a: ({ children, className, ...props }) => (
    <a
      className={cn(
        "text-primary underline underline-offset-4 hover:opacity-80",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  ),
  code: ({ children, className, ...props }) => {
    const isBlock = Boolean(className?.includes("language-"));
    if (isBlock) {
      return (
        <code className={cn("block", className)} {...props}>
          {children}
        </code>
      );
    }
    return (
      <code
        className={cn(
          "bg-muted px-1 py-0.5 rounded text-sm font-mono",
          className,
        )}
        {...props}
      >
        {children}
      </code>
    );
  },
  pre: ({ children, className, ...props }) => (
    <pre
      className={cn(
        "bg-muted p-4 rounded-lg overflow-x-auto mb-3 text-sm font-mono",
        className,
      )}
      {...props}
    >
      {children}
    </pre>
  ),
  hr: ({ className, ...props }) => (
    <hr className={cn("my-6 border-border", className)} {...props} />
  ),
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto mb-3">
      <table className="w-full border-collapse text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, className, ...props }) => (
    <thead className={cn("border-b border-border", className)} {...props}>
      {children}
    </thead>
  ),
  tbody: ({ children, className, ...props }) => (
    <tbody className={className} {...props}>
      {children}
    </tbody>
  ),
  tr: ({ children, className, ...props }) => (
    <tr
      className={cn("border-b border-border last:border-0", className)}
      {...props}
    >
      {children}
    </tr>
  ),
  th: ({ children, className, ...props }) => (
    <th className={cn("px-3 py-2 text-left font-bold", className)} {...props}>
      {children}
    </th>
  ),
  td: ({ children, className, ...props }) => (
    <td className={cn("px-3 py-2", className)} {...props}>
      {children}
    </td>
  ),
  input: ({ className, ...props }) => (
    <input className={cn("mt-1", className)} disabled {...props} />
  ),
};
