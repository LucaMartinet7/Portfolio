import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { SECTION_IDS } from "@/lib/anchors.ts";

export default function Hobbies() {
    const [playlistLoaded, setPlaylistLoaded] = useState(false);
    const [isCarouselOpen, setIsCarouselOpen] = useState(false);
    const [activePhotoIdx, setActivePhotoIdx] = useState(0);
    const [imageDimensions, setImageDimensions] = useState({
        width: 400,
        height: 500,
    });
    const touchStartX = useRef(0);
    const touchStartY = useRef(0);

    const photos = [
        { title: "Skiing", src: "/photos/experience/barcelona/Barcelona.webp" },
        { title: "Travel", src: "/photos/experience/cardiff/Cardiff_out.webp" },
        { title: "Adventure", src: "/photos/experience/berlin/Berlin.webp" },
        {
            title: "Activity",
            src: "/photos/experience/geneva-cyber/Cyberpeace_out2.webp",
        },
    ];

    useEffect(() => {
        if (isCarouselOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isCarouselOpen]);

    const nextPhoto = useCallback(() => {
        setActivePhotoIdx((i) => (i + 1) % photos.length);
    }, [photos.length]);

    const prevPhoto = useCallback(() => {
        setActivePhotoIdx((i) => (i - 1 + photos.length) % photos.length);
    }, [photos.length]);

    useEffect(() => {
        if (!isCarouselOpen) return;
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setIsCarouselOpen(false);
            if (e.key === "ArrowRight") nextPhoto();
            if (e.key === "ArrowLeft") prevPhoto();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [isCarouselOpen, nextPhoto, prevPhoto]);

    const openCarousel = (idx: number) => {
        setActivePhotoIdx(idx);
        setIsCarouselOpen(true);
        const img = new Image();
        img.onload = () => {
            setImageDimensions({
                width: img.naturalWidth,
                height: img.naturalHeight,
            });
        };
        img.onerror = () => {
            setImageDimensions({ width: 400, height: 500 });
        };
        img.src = photos[idx].src;
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        const touchEndX = e.changedTouches[0].clientX;
        const touchEndY = e.changedTouches[0].clientY;
        handleSwipe(touchEndX, touchEndY);
    };

    const handleSwipe = (touchEndX: number, touchEndY: number) => {
        const swipeThreshold = 50;
        const diffX = touchStartX.current - touchEndX;
        const diffY = Math.abs(touchStartY.current - touchEndY);
        if (Math.abs(diffX) > swipeThreshold && Math.abs(diffX) > diffY) {
            if (diffX > 0) nextPhoto();
            else prevPhoto();
        }
    };

    const getCardStyle = (idx: number) => {
        const distance = (idx - activePhotoIdx + photos.length) % photos.length;
        const isActive = distance === 0;
        const isNext = distance === 1;
        const isPrev = distance === photos.length - 1;

        if (isActive)
            return {
                transform: "translateX(0px) scale(1)",
                opacity: 1,
                zIndex: 30,
                pointerEvents: "auto" as React.CSSProperties["pointerEvents"],
            };
        if (isNext)
            return {
                transform: "translateX(60px) scale(0.95)",
                opacity: 0.6,
                zIndex: 20,
                pointerEvents: "auto" as React.CSSProperties["pointerEvents"],
            };
        if (isPrev)
            return {
                transform: "translateX(-60px) scale(0.95)",
                opacity: 0.6,
                zIndex: 10,
                pointerEvents: "auto" as React.CSSProperties["pointerEvents"],
            };
        return {
            transform: "translateX(120px) scale(0.9)",
            opacity: 0,
            zIndex: 5,
            pointerEvents: "none" as React.CSSProperties["pointerEvents"],
        };
    };

    const maxWidth = 480;
    const maxHeight = 600;
    let displayWidth = imageDimensions.width;
    let displayHeight = imageDimensions.height;
    const aspectRatio = imageDimensions.width / imageDimensions.height;
    if (displayWidth > maxWidth) {
        displayWidth = maxWidth;
        displayHeight = maxWidth / aspectRatio;
    }
    if (displayHeight > maxHeight) {
        displayHeight = maxHeight;
        displayWidth = maxHeight * aspectRatio;
    }

    return (
        <section id={SECTION_IDS.HOBBIES} className="px-6 py-16 md:py-32">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Hobbies & Interests
                    </h2>
                    <p className="text-neutral-500 dark:text-neutral-400 text-base md:text-lg">
                        Things I enjoy outside of coding
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                    {/* Playlist Section */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl md:text-2xl font-bold mb-4">
                            Currently Listening To
                        </h3>
                        <div className="rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-900 relative">
                            {!playlistLoaded && (
                                <div className="absolute inset-0 bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center z-10">
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                                        <span className="text-neutral-500 dark:text-neutral-400">
                                            Loading playlist...
                                        </span>
                                    </div>
                                </div>
                            )}
                            <iframe
                                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                                height="450"
                                className="w-full max-w-[660px] overflow-hidden bg-transparent"
                                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                                src="https://embed.music.apple.com/fr/playlist/pl.u-RRbV0o5sm4axqmN"
                                onLoad={() => setPlaylistLoaded(true)}
                            />
                        </div>
                    </div>

                    {/* Photos Grid Section */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl md:text-2xl font-bold mb-4">
                            Adventures
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {photos.map((photo, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => openCarousel(idx)}
                                    className="rounded-lg aspect-square relative overflow-hidden cursor-pointer group touch-manipulation min-h-[120px] bg-neutral-200 dark:bg-neutral-800 bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url(${photo.src})`,
                                    }}
                                >
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                                    <span className="relative z-10 text-white text-sm md:text-base font-medium">
                                        {photo.title}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Carousel Modal */}
            <AnimatePresence>
                {isCarouselOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                        onClick={() => setIsCarouselOpen(false)}
                    >
                        <div
                            className="relative perspective h-auto"
                            onClick={(e) => e.stopPropagation()}
                            onTouchStart={handleTouchStart}
                            onTouchEnd={handleTouchEnd}
                            style={{
                                width: Math.min(
                                    displayWidth + 40,
                                    window.innerWidth - 32
                                ),
                            }}
                        >
                            <button
                                onClick={() => setIsCarouselOpen(false)}
                                className="absolute -top-2 right-2 md:-top-12 md:-right-12 z-40 bg-neutral-800/80 hover:bg-neutral-700 p-2 rounded-full transition-colors touch-manipulation"
                                aria-label="Close carousel"
                            >
                                <X size={24} className="text-white" />
                            </button>

                            <div
                                className="relative flex items-center justify-center"
                                style={{ height: displayHeight }}
                            >
                                {photos.map((photo, idx) => {
                                    const style = getCardStyle(idx);
                                    const isInactive =
                                        style.pointerEvents === "none";
                                    return (
                                        <div
                                            key={idx}
                                            style={{
                                                transform: style.transform,
                                                opacity: style.opacity,
                                                zIndex: style.zIndex,
                                                width: displayWidth,
                                                height: displayHeight,
                                                pointerEvents:
                                                    style.pointerEvents,
                                            }}
                                            className={`absolute rounded-lg bg-neutral-800 flex items-center justify-center shadow-2xl transition-all duration-500 ease-out overflow-hidden ${isInactive ? "pointer-events-none" : ""}`}
                                        >
                                            <img
                                                src={photo.src}
                                                alt={photo.title}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    (
                                                        e.target as HTMLImageElement
                                                    ).style.display = "none";
                                                }}
                                            />
                                            <span className="text-white text-2xl font-semibold absolute">
                                                {photo.title}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            <button
                                onClick={prevPhoto}
                                className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-14 z-40 bg-neutral-800 hover:bg-neutral-700 p-2 md:p-3 rounded-full transition-colors touch-manipulation"
                                aria-label="Previous photo"
                            >
                                <ChevronLeft
                                    size={20}
                                    className="text-white md:w-6 md:h-6"
                                />
                            </button>

                            <button
                                onClick={nextPhoto}
                                className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-14 z-40 bg-neutral-800 hover:bg-neutral-700 p-2 md:p-3 rounded-full transition-colors touch-manipulation"
                                aria-label="Next photo"
                            >
                                <ChevronRight
                                    size={20}
                                    className="text-white md:w-6 md:h-6"
                                />
                            </button>

                            <div className="flex justify-center gap-2 absolute -bottom-8 md:-bottom-14 left-1/2 -translate-x-1/2">
                                {photos.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActivePhotoIdx(idx)}
                                        className={`h-2 rounded-full transition-all duration-300 touch-manipulation ${idx === activePhotoIdx ? "bg-blue-500 w-8" : "bg-neutral-500 hover:bg-neutral-400 w-2"}`}
                                        aria-label={`Go to photo ${idx + 1}`}
                                    />
                                ))}
                            </div>

                            <div className="text-center text-neutral-400 text-sm absolute -bottom-14 md:-bottom-20 left-1/2 -translate-x-1/2">
                                {activePhotoIdx + 1} / {photos.length}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
