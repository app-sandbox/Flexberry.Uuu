import { Serializer as SdfSerializer } from
  '../mixins/regenerated/serializers/i-i-s-uuu-sdf';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(SdfSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
