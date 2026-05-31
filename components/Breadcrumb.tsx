import React from "react";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  Breadcrumb as BreadcrumbPrimitive,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface Props {
  items: {
    title: string;
    href?: string;
  }[];
}

/**
 * パンくずリストコンポーネント
 * @param items - パンくずリストのアイテム
 * @param items.title - パンくずリストのアイテムのタイトル
 * @param items.href - パンくずリストのアイテムのリンク
 */
export const Breadcrumb = ({ items }: Props) => {
  return (
    <BreadcrumbPrimitive className="py-2">
      <BreadcrumbList>
        {items.map((item) => (
          <React.Fragment key={item.title}>
            <BreadcrumbItem>
              <BreadcrumbLink href={item.href ? item.href : undefined}>
                {item.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {item.href && <BreadcrumbSeparator />}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </BreadcrumbPrimitive>
  );
};
