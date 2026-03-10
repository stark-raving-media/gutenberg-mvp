// Create class for Actor status conditions
export class ActorStatus
{
  constructor
  (
    name,
    description,
    isPermanent,
    isObservable,
    privacyDC
  )
  {
    this.name = name;
    this.description = description;
    this.isPermanent = isPermanent; // bool
    this.isObservable = isObservable; // bool
    this.privacyDC = Math.min(20, Math.max(1, privacyDC)); // clamp int between 1 - 20
  };
};