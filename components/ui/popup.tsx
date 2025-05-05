"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const Popup = DialogPrimitive.Root;
const PopupTrigger = DialogPrimitive.Trigger;
const PopupClose = DialogPrimitive.Close;
const PopupPortal = DialogPrimitive.Portal;

const PopupOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/80 backdrop-blur-sm",
      className
    )}
    {...props}
  />
));
PopupOverlay.displayName = DialogPrimitive.Overlay.displayName;

const PopupContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <PopupPortal>
    <PopupOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-1/2 top-1/2 z-50 grid w-full max-w-sm max-h-screen overflow-y-auto translate-x-[-50%] translate-y-[-50%] gap-3 border border-violet-800/40 bg-black p-4 shadow-lg duration-200 rounded-md text-xs text-gray-200", // <== forçando fonte pequena e cor clara
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="absolute right-2 top-2 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none">
        <X className="h-3 w-3 text-violet-400" />
        <span className="sr-only">Fechar</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </PopupPortal>
));
PopupContent.displayName = DialogPrimitive.Content.displayName;

const PopupHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1 text-left", className)} {...props} />
);
PopupHeader.displayName = "PopupHeader";

const PopupFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex justify-end space-x-2", className)} {...props} />
);
PopupFooter.displayName = "PopupFooter";

const PopupTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn("text-sm font-semibold text-white", className)}
    {...props}
  />
));
PopupTitle.displayName = DialogPrimitive.Title.displayName;

const PopupDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-xs text-gray-400", className)}
    {...props}
  />
));
PopupDescription.displayName = DialogPrimitive.Description.displayName;

export {
  PopupPortal,
  PopupOverlay,
  PopupClose,
  PopupTrigger,
  PopupContent,
  PopupHeader,
  PopupFooter,
  PopupTitle,
  PopupDescription,
};

export default Popup;
