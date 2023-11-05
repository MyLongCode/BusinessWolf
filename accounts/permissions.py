from rest_framework import permissions


class IsOwner(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.

        # Write permissions are only allowed to the owner of the snippet.
        return obj.id == request.user.id or request.user.is_superuser


class IsStaffOrPostOnly(permissions.BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.method not in ['GET']:
            return True

        return obj.is_superuser
