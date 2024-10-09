import { makeAutoObservable } from "mobx";
import { hydrateStore, makePersistable } from "mobx-persist-store";

export class AuthStore implements IStore {
  token: string = "";
  expiresAt: string = "";
  isGuest: boolean = false;
  constructor() {
    makeAutoObservable(this);
    // /
    makePersistable(this, {
      name: AuthStore.name,
      properties: ["token", "expiresAt","isGuest"],
    });
  }

  // Unified set methods
  set<T extends StoreKeysOf<AuthStore>>(what: T, value: AuthStore[T]) {
    (this as AuthStore)[what] = value;
  }
  setMany<T extends StoreKeysOf<AuthStore>>(obj: Record<T, AuthStore[T]>) {
    for (const [k, v] of Object.entries(obj)) {
      this.set(k as T, v as AuthStore[T]);
    }
  }

  // Hydration
  hydrate = async (): PVoid => {
    await hydrateStore(this);
  };
}
