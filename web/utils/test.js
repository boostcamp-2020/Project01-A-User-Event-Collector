"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getAlbumPageData = exports.getMagazinePageData = exports.getArtistPageData = exports.getPlaylistPageData = void 0;
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var getTrackCardData = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var track, artistIdArr, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, prisma.tracks.findUnique({
                    where: { id: id },
                    include: { Albums: true }
                })
                // relation -> table
            ];
            case 1:
                track = _b.sent();
                return [4 /*yield*/, prisma.artists_Tracks.findMany({ where: { trackId: id } })];
            case 2:
                artistIdArr = _b.sent();
                _a = track;
                return [4 /*yield*/, Promise.all(artistIdArr.map(function (elem) { return prisma.artists.findUnique({ where: { id: elem.artistId } }); }))];
            case 3:
                _a.Artists = _b.sent();
                console.log(track);
                return [2 /*return*/, track];
        }
    });
}); };
var getPlaylistPageData = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var playlist, trackIdArr, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, prisma.playlists.findUnique({ where: { id: id } })
                //author 나중에
            ];
            case 1:
                playlist = _b.sent();
                return [4 /*yield*/, prisma.playlists_Tracks.findMany({
                        where: { playlistId: id },
                        orderBy: { playlistTrackNumber: 'asc' }
                    })];
            case 2:
                trackIdArr = _b.sent();
                _a = playlist;
                return [4 /*yield*/, Promise.all(trackIdArr.map(function (elem) { return getTrackCardData(elem.trackId); }))];
            case 3:
                _a.Tracks = _b.sent();
                console.log(playlist);
                return [2 /*return*/, playlist];
        }
    });
}); };
exports.getPlaylistPageData = getPlaylistPageData;
var getArtistPageData = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var artist, _a, trackIdArr, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, prisma.artists.findUnique({ where: { id: id } })];
            case 1:
                artist = _c.sent();
                _a = artist;
                return [4 /*yield*/, prisma.albums.findMany({ where: { artistId: id } })];
            case 2:
                _a.Albums = _c.sent();
                return [4 /*yield*/, prisma.artists_Tracks.findMany({ where: { artistId: id } })];
            case 3:
                trackIdArr = _c.sent();
                _b = artist;
                return [4 /*yield*/, Promise.all(trackIdArr.map(function (elem) { return getTrackCardData(elem.trackId); }))];
            case 4:
                _b.Tracks = _c.sent();
                console.log(artist);
                return [2 /*return*/, artist];
        }
    });
}); };
exports.getArtistPageData = getArtistPageData;
var getMagazinePageData = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var magazine, trackIdArr, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, prisma.magazines.findUnique({ where: { id: id } })];
            case 1:
                magazine = _b.sent();
                return [4 /*yield*/, prisma.playlists_Tracks.findMany({
                        where: { playlistId: magazine.playlistId },
                        orderBy: { playlistTrackNumber: 'asc' }
                    })];
            case 2:
                trackIdArr = _b.sent();
                _a = magazine;
                return [4 /*yield*/, Promise.all(trackIdArr.map(function (elem) { return getTrackCardData(elem.trackId); }))];
            case 3:
                _a.Tracks = _b.sent();
                console.log(magazine);
                return [2 /*return*/, magazine];
        }
    });
}); };
exports.getMagazinePageData = getMagazinePageData;
var getAlbumPageData = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var album, trackIdArr, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, prisma.albums.findUnique({ where: { id: id } })];
            case 1:
                album = _b.sent();
                return [4 /*yield*/, prisma.playlists_Tracks.findMany({
                        where: { playlistId: album.playlistId },
                        orderBy: { playlistTrackNumber: 'asc' }
                    })];
            case 2:
                trackIdArr = _b.sent();
                _a = album;
                return [4 /*yield*/, Promise.all(trackIdArr.map(function (elem) { return getTrackCardData(elem.trackId); }))];
            case 3:
                _a.Tracks = _b.sent();
                console.log(album);
                return [2 /*return*/, album];
        }
    });
}); };
exports.getAlbumPageData = getAlbumPageData;