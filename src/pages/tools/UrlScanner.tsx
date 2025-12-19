import { IonPage, IonContent } from "@ionic/react";
import { Link2 } from "lucide-react";
import PageHeading from "../../components/ui/page-heading/PageHeading";

export default function UrlScanner() {
  return (
    <IonPage>
      <IonContent fullscreen>
        <PageHeading
          title="Comprobar URL"
          icon={Link2}
        />
      </IonContent>
    </IonPage>
  );
}
