import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import { BarChartIcon } from "lucide-react";

export function Homepage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <ComputerIcon className="h-6 w-6" />
            <span className="font-bold">Arrakis - Cluster Home</span>
          </Link>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <div className="grid gap-4 p-4">
                <Link href="https://arrakis.stork-eel.ts.net/grafana">
                  <a className="flex items-center justify-between gap-4 rounded-md bg-muted p-4 hover:bg-muted/50">
                    <div>
                      <h3 className="text-lg font-medium">Grafana</h3>
                      <p className="text-sm text-muted-foreground">Powerful data visualization and monitoring tool.</p>
                    </div>
                  </a>
                </Link>
                <Link href="https://arrakis.stork-eel.ts.net/plex">
                  <a className="flex items-center justify-between gap-4 rounded-md bg-muted p-4 hover:bg-muted/50">
                    <div>
                      <h3 className="text-lg font-medium">Plex</h3>
                      <p className="text-sm text-muted-foreground">Organize and stream your media library.</p>
                    </div>
                    
                  </a>
                </Link>
                <Link href="https://arrakis.stork-eel.ts.net/overseerr">
                  <a className="flex items-center justify-between gap-4 rounded-md bg-muted p-4 hover:bg-muted/50">
                    <div>
                      <h3 className="text-lg font-medium">Overseerr</h3>
                      <p className="text-sm text-muted-foreground">Manage media requests and approvals.</p>
                    </div>
      
                  </a>
                </Link>
                <Link href="https://arrakis.stork-eel.ts.net/sonarr">
                  <a className="flex items-center justify-between gap-4 rounded-md bg-muted p-4 hover:bg-muted/50">
                    <div>
                      <h3 className="text-lg font-medium">Sonarr</h3>
                      <p className="text-sm text-muted-foreground">Automated TV show downloading and management.</p>
                    </div>
                    
                  </a>
                </Link>
                <Link href="https://arrakis.stork-eel.ts.net/radarr">
                  <a className="flex items-center justify-between gap-4 rounded-md bg-muted p-4 hover:bg-muted/50">
                    <div>
                      <h3 className="text-lg font-medium">Radarr</h3>
                      <p className="text-sm text-muted-foreground">Automated movie downloading and management.</p>
                    </div>
                    
                  </a>
                </Link>
                <Link href="https://arrakis.stork-eel.ts.net/prowlarr">
                  <a className="flex items-center justify-between gap-4 rounded-md bg-muted p-4 hover:bg-muted/50">
                    <div>
                      <h3 className="text-lg font-medium">Prowlarr</h3>
                      <p className="text-sm text-muted-foreground">Indexer management and search for Sonarr, Radarr, and others.</p>
                    </div>
                    
                  </a>
                </Link>
                <Link href="https://arrakis.stork-eel.ts.net/transmission">
                  <a className="flex items-center justify-between gap-4 rounded-md bg-muted p-4 hover:bg-muted/50">
                    <div>
                      <h3 className="text-lg font-medium">Transmission</h3>
                      <p className="text-sm text-muted-foreground">Fast, easy, and free BitTorrent client.</p>
                    </div>
                    
                  </a>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1 py-12 md:py-24">
        <div className="container grid gap-12 px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <a
              href="https://arrakis.stork-eel.ts.net/grafana"
              className="group flex flex-col items-start gap-4 rounded-lg border border-input bg-background p-6 hover:bg-muted"
            >
              <div className="flex items-center gap-2">
                <BarChartIcon className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-medium">Grafana</h3>
              </div>
              <p className="text-muted-foreground">Powerful data visualization and monitoring tool.</p>
            </a>
            <a
              href="https://arrakis.stork-eel.ts.net/plex"
              className="group flex flex-col items-start gap-4 rounded-lg border border-input bg-background p-6 hover:bg-muted"
            >
              <div className="flex items-center gap-2">
                <TvIcon className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-medium">Plex</h3>
              </div>
              <p className="text-muted-foreground">Organize and stream your media library.</p>
            </a>
            <a
              href="https://arrakis.stork-eel.ts.net/overseerr"
              className="group flex flex-col items-start gap-4 rounded-lg border border-input bg-background p-6 hover:bg-muted"
            >
              <div className="flex items-center gap-2">
                <SearchIcon className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-medium">Overseerr</h3>
              </div>
              <p className="text-muted-foreground">Manage media requests and approvals.</p>
            </a>
            <a
              href="https://arrakis.stork-eel.ts.net/sonarr"
              className="group flex flex-col items-start gap-4 rounded-lg border border-input bg-background p-6 hover:bg-muted"
            >
              <div className="flex items-center gap-2">
                <TvIcon className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-medium">Sonarr</h3>
              </div>
              <p className="text-muted-foreground">Automated TV show downloading and management.</p>
            </a>
            <a
              href="https://arrakis.stork-eel.ts.net/radarr"
              className="group flex flex-col items-start gap-4 rounded-lg border border-input bg-background p-6 hover:bg-muted"
            >
              <div className="flex items-center gap-2">
                <FilmIcon className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-medium">Radarr</h3>
              </div>
              <p className="text-muted-foreground">Automated movie downloading and management.</p>
            </a>
            <a
              href="https://arrakis.stork-eel.ts.net/prowlarr"
              className="group flex flex-col items-start gap-4 rounded-lg border border-input bg-background p-6 hover:bg-muted"
            >
              <div className="flex items-center gap-2">
                <SearchIcon className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-medium">Prowlarr</h3>
              </div>
              <p className="text-muted-foreground">Indexer management and search for Sonarr, Radarr, and others.</p>
            </a>
            <a
              href="https://arrakis.stork-eel.ts.net/transmission"
              className="group flex flex-col items-start gap-4 rounded-lg border border-input bg-background p-6 hover:bg-muted"
            >
              <div className="flex items-center gap-2">
                <DownloadIcon className="h-6 w-6 text-primary" />
                <h3 className="text-xl font-medium">Transmission</h3>
              </div>
              <p className="text-muted-foreground">Fast, easy, and free BitTorrent client.</p>
            </a>
          </div>
        </div>
      </main>
      <footer className="bg-muted p-6 md:py-12">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Relevant Repos</h3>
            <Link href="https://github.com/roshbhatia/arrakis-ingress/" prefetch={false}>
              Arrakis Ingress
            </Link>
            <Link href="https://github.com/ross-corp/mentat" prefetch={false}>
              Mentat
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Tailscale Admin</h3>
            <Link href="https://login.tailscale.com/admin/machines/100.84.238.17" prefetch={false}>
              Tailscale Admin
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">ProtonVPN</h3>
            <Link href="https://account.protonvpn.com/account" prefetch={false}>
              ProtonVPN
            </Link>
          </div>
        </div>
        <div className="container max-w-7xl flex justify-center mt-8 text-sm text-muted-foreground">
          Built by rosscorp
        </div>
      </footer>
    </div>
  )
}



function ComputerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="8" x="5" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 18h2" />
      <path d="M12 18h6" />
    </svg>
  )
}


function DownloadIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" x2="12" y1="15" y2="3" />
    </svg>
  )
}


function FilmIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M7 3v18" />
      <path d="M3 7.5h4" />
      <path d="M3 12h18" />
      <path d="M3 16.5h4" />
      <path d="M17 3v18" />
      <path d="M17 7.5h4" />
      <path d="M17 16.5h4" />
    </svg>
  )
}


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function TvIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
      <polyline points="17 2 12 7 7 2" />
    </svg>
  )
}


